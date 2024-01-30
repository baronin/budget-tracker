import * as path from 'path';
import moment from 'moment';
import { getFileFormat, isImage, isPDF } from '../utils/fileFormat.js';

class FileService {
  async saveFile(file) {
    if (!file) {
      return null;
    }
    const fileName = file.name;
    const exs = getFileFormat(fileName);
    const newFileName = `${moment().format()}.${exs}`;
    let filePath;
    if (isPDF(fileName)) {
      filePath = path.resolve('static/files', newFileName);
    } else if (isImage(fileName)) {
      filePath = path.resolve('static/images', newFileName);
    } else {
      throw new Error('Format of File is not correct');
    }
    try {
      await file.mv(filePath);
      return newFileName;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new FileService();
