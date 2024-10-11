import Papa from 'papaparse';

export function readCSV(file: File): Promise<number[]> {
  return new Promise((resolve) => {
    Papa.parse(file, {
      complete: (results) => {
        const data = results.data
          .map((row: any) => parseFloat(row[0]))
          .filter((num) => !isNaN(num));
        resolve(data);
      },
      header: false,
    });
  });
}
