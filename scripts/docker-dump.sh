#!/bin/bash

help() {
    echo "\
Usage: $0 save    - save all docker images to current directory
       $0 load    - find all images in current directory then import to docker"
    exit 1
}

get-image-field() {
  local imageId=$1
  local field=$2
  : ${imageId:? reuired}
  : ${field:? required}

  docker images --no-trunc|sed -n "/${imageId}/ s/ \+/ /gp"|cut -d" " -f $field
}

get-image-name() {
  get-image-field $1 1
}

get-image-tag() {
  get-image-field $1 2
}

save-all-image() {
  local ids=$(docker images -q)
  local name safename tag

  for id in $ids; do
    name=$(get-image-name $id)
    tag=$(get-image-tag $id)
    if [[  $name =~ / ]] ; then
       dir=${name%/*}
       mkdir -p $dir
    fi
    echo [DEBUG] save $name:$tag ...
    (time  docker save -o $name.$tag.dim $name:$tag) 2>&1|grep real
  done
}

load-all-image() {
  local name safename noextension tag

  for image in $(find . -name \*.dim); do
    echo [DEBUG] load
    tar -Oxf $image repositories
    echo
    docker load -i $image
  done
}

# ---------------------------------------------

case $1 in
    # -- save --
    save)
        save-all-image
    ;;
    # -- load --
    load)
        load-all-image
    ;;
    # -- others --
    *)
        help
    ;;
esac

exit 0
