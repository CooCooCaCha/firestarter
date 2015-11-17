#/bin/bash
FILE=package.json

TIME=$(git log --pretty=format:%cd -n 1 --date=iso $FILE)
TIME=$(date -f '%Y-%m-%d %H:%M:%S %z' -d "$TIME" +%Y%m%d%H%M.%S)
touch -m -t $TIME $FILE
