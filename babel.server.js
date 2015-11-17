require("babel-core/register")({
  stage: 0
});

global.__CLIENT__ = false;
global.__SERVER__ = true;

if( process.env.NODE_ENV !== "production" ) {
  if( require("piping")({hook: true}) )
    process.exit(1);
}

require("./server");
