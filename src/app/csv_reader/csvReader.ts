import Papa from 'papaparse';

export function readCSV(file: File): Promise<number[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (results) => {
        const data = results.data.map((row: any) => parseFloat(row[0]));
        resolve(data);
      },
      error: (error) => {
        reject(error);
      },
      header: false,
    });
  });
}
