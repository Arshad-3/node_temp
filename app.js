/* npm-global command, comes with node
   npm --version

   local dependency- use it only in this particular project
   npm i <packageName>

   global dependency- use it in any project 
   npm install -g <packageName>
   sudo npm install =g <packageName> (mac)
   
   package.json -manifest file(stores imp info abt project/package)
   manual approach (create package.json in the root, create properties , etc)
   npm init (step by step, press enter to skip )
   npm init -y (everything default)
*/
const lo=require('lodash')
const items=[1,[1,2,[3,[4]]]]
const newItems=lo.flattenDeep(items)
console.log(newItems)