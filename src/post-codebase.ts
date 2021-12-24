import { mapFiles } from "./map-files";
import { getParameters } from 'codesandbox/lib/api/define.js';
import axios from "axios";

export const postCodebase = async (codebasePath: string, baseUrl: string) => {
  const files = await mapFiles(codebasePath);

  const parameters = getParameters({ files });

  const params = new URLSearchParams();
  params.append('parameters', parameters);

  const result = await axios.post(`${baseUrl}/api/v0.1/codebases`, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  console.log(`Codebase preview available at:
- Standalone page: ${baseUrl}/previews/${result.data.id}
- Embedded in iframe: ${baseUrl}/embedded-previews/${result.data.id}
`);
};
