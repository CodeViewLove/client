import { mapFiles } from "./map-files";
import { getParameters } from 'codesandbox/lib/api/define.js';
import axios from "axios";

export const postCodebase = async (codebasePath: string, baseUrl: string, returnIframeContent: boolean) => {
  const files = await mapFiles(codebasePath);

  const parameters = getParameters({ files });

  const params = new URLSearchParams();
  params.append('parameters', parameters);
  if (returnIframeContent) {
    params.append('returnIframeContent', 'true');
  }

  const result = await axios.post(`${baseUrl}/api/v0.1/codebases`, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  if (returnIframeContent) {
    console.log(result.data);
  } else {
    console.log(`Codebase preview available at: ${baseUrl}/embedded-previews/${result.data.id}`);
  }
};
