import { mapFiles } from "./map-files";
import { getParameters } from 'codesandbox/lib/api/define.js';
import axios from "axios";

const doIt = async () => {
  console.log("Start...");
  const files = await mapFiles('../MISC/sample-divjoy-project');
  //console.log("ALL", all);

  console.log("Files listed", Object.keys(files).length);

  const parameters = getParameters({ files });

  console.log("Got parameters");

  const params = new URLSearchParams();
  params.append('parameters', parameters);

  console.log("Parameters ready", parameters.length);

  const result = await axios.post('http://localhost:3000/api/v0.1/codebases', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  console.log("Done!");

//  console.log(result.data);
};

(async () => {
  try {
    await doIt();
    console.log("END");
  }
  catch(e) {
    console.log("Error", e);
  }
})();

console.log("End of file");
