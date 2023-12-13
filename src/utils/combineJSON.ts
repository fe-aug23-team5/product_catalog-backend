const fs = require('fs');
const path = require('path');
import {PhoneDetailsType} from '../types/PhoneDetailsType'

export function combineJSON(folderPath: string): PhoneDetailsType[] {
  const combinedData: PhoneDetailsType[] = [];
  const files = fs.readdirSync(folderPath);

  files.forEach((file:any) => {
    const filePath = path.join(folderPath, file);
    if (file.endsWith('.json')) {
      try {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const jsonData: PhoneDetailsType = JSON.parse(fileContents);
        combinedData.push(jsonData);
      } catch (error) {
        console.error(`Error reading file ${filePath}: ${error}`);
      }
    }
  });

  return combinedData;
}
