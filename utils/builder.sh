#! /bin/sh

java -jar compiler/compiler.jar --js=../src/jcm.js --js_output_file=../build/jcm.min.js
\cp ../src/jcm.css ../build/jcm.css