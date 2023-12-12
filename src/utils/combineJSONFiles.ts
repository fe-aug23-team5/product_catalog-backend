const fs = require('fs');
const path = require('path');
import { PhoneDetailsType } from '../types/PhoneDetailsType';

const combinedData: PhoneDetailsType[] = [];

// Function to read and combine JSON files
export const combineJSONFiles = (
  directoryPath: string
): PhoneDetailsType[] | void => {
  fs.readdir(directoryPath, (err: any, files: any) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file: any) => {
      const filePath = path.join(directoryPath, file);
      console.log(filePath);

      fs.readFile(filePath, 'utf8', (err: any, data: string) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        try {

          const jsonData = JSON.parse(data);
          combinedData.push(jsonData);
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError);
        }

        if (combinedData.length === files.length) {
            console.log("resulting data", combinedData)
          return combinedData;
        }
      });
    });
  });
};
