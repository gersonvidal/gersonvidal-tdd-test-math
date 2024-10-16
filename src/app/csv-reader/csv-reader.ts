import Papa from 'papaparse';

export function readCsv(file: File): Promise<number[]> {
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

export function readCsvWithColumns(file: File): Promise<number[][]> {
  return new Promise((resolve) => {
    Papa.parse(file, {
      complete: (results) => {
        const data = results.data as any[];
        const columnData: number[][] = [];

        // Make sure the csv contains data
        if (data.length === 0) {
          resolve(columnData);
          return;
        }

        // Initialize matrices for each column
        const numColumns = data[0].length; // column size in first row
        for (let i = 0; i < numColumns; i++) {
          columnData[i] = []; // Initialize each column with an empty array
        }

        data.forEach((row) => {
          row.forEach((cell: string, index: number) => {
            const value = parseFloat(cell);
            if (!isNaN(value)) {
              columnData[index].push(value); 
            }
          });
        });

        // Make each csv column a matrix column 
        const transposedData = columnData[0].map((_, colIndex) =>
          columnData.map((row) => row[colIndex])
        );

        resolve(transposedData);
      },
      // header: true, 
    });
  });
}
