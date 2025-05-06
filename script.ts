document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById(
    "downloadBtn"
  ) as HTMLButtonElement;

  downloadBtn.addEventListener("click", () => {
    // Collect all input values
    const formData: { [key: string]: any } = {};

    // Section 1: Dates (製造日 and 包装日)
    const dateInputs = document.querySelectorAll(
      ".date-box input.date-input"
    ) as NodeListOf<HTMLInputElement>;
    formData["dates"] = {
      manufacturing: {
        year: dateInputs[0].value,
        month: dateInputs[1].value,
        day: dateInputs[2].value,
      },
      packaging: {
        year: dateInputs[3].value,
        month: dateInputs[4].value,
        day: dateInputs[5].value,
      },
    };

    // Collect all tables
    const tables = document.querySelectorAll("table");
    const tableData: { [key: string]: any } = {};

    // Table 1: 資料No., 製品名, etc.
    const table1Inputs = tables[0].querySelectorAll(
      "input.form-input"
    ) as NodeListOf<HTMLInputElement>;
    tableData["table1"] = {
      資料No: table1Inputs[0].value,
      製品名: table1Inputs[1].value,
      製品コード: table1Inputs[2].value,
      製品規格: table1Inputs[3].value,
      承認: table1Inputs[4].value,
      照査: table1Inputs[5].value,
      作成: table1Inputs[6].value,
    };

    // Table 2: 設定重量, PPバント（青）
    const table2Inputs = tables[1].querySelectorAll(
      "input.form-input"
    ) as NodeListOf<HTMLInputElement>;
    tableData["table2"] = {
      設定重量: table2Inputs[0].value,
      PPバント_青_承認: table2Inputs[1].value,
      PPバント_青_照査: table2Inputs[2].value,
    };

    // Table 3: 注意事項
    const table3Inputs = tables[2].querySelectorAll(
      "input.form-input"
    ) as NodeListOf<HTMLInputElement>;
    tableData["table3"] = {
      注意事項: [
        {
          賞味期限_コード: table3Inputs[0].value,
          賞味期限_包装資材名: table3Inputs[1].value,
          賞味期限_詳細: table3Inputs[2].value,
          賞味期限_不良数: table3Inputs[3].value,
          賞味期限_包材残数: table3Inputs[4].value,
        },
        {
          外装印字_コード: table3Inputs[5].value,
          外装印字_包装資材名: table3Inputs[6].value,
          外装印字_詳細: table3Inputs[7].value,
          外装印字_不良数: table3Inputs[8].value,
          外装印字_包材残数: table3Inputs[9].value,
        },
        {
          内装印字_コード: table3Inputs[10].value,
          内装印字_包装資材名: table3Inputs[11].value,
          内装印字_詳細: table3Inputs[12].value,
          内装印字_不良数: table3Inputs[13].value,
          内装印字_包材残数: table3Inputs[14].value,
        },
        {
          添付シール_コード: table3Inputs[15].value,
          添付シール_包装資材名: table3Inputs[16].value,
          添付シール_詳細: table3Inputs[17].value,
          添付シール_不良数: table3Inputs[18].value,
          添付シール_包材残数: table3Inputs[19].value,
        },
      ],
    };

    // Table 4: 時間, 確認者, etc.
    const table4Inputs = tables[3].querySelectorAll(
      "input.form-input"
    ) as NodeListOf<HTMLInputElement>;
    tableData["table4"] = {
      段ボール: {
        時間: table4Inputs[0].value,
        確認者: table4Inputs[1].value,
      },
      テープ_茶: {
        時間: table4Inputs[2].value,
        確認者: table4Inputs[3].value,
        クラフトテープ貼付け: table4Inputs[4].value,
      },
      ケースNo: {
        時間: table4Inputs[5].value,
        確認者: table4Inputs[6].value,
      },
      PPバンド: {
        時間: table4Inputs[7].value,
        確認者: table4Inputs[8].value,
        クラフトテープ貼付け: table4Inputs[9].value,
      },
      添付品: {
        時間: table4Inputs[10].value,
        確認者: table4Inputs[11].value,
      },
      束り方: {
        時間: table4Inputs[12].value,
        確認者: table4Inputs[13].value,
        クラフトテープ貼付け: table4Inputs[14].value,
      },
    };

    // Table 5: 出来高, 数量, 時間
    const table5Inputs = tables[4].querySelectorAll(
      "input.form-input"
    ) as NodeListOf<HTMLInputElement>;
    tableData["table5"] = {
      出来高_1: Array.from(table5Inputs)
        .slice(0, 14)
        .map((input) => input.value),
      出来高_2: Array.from(table5Inputs)
        .slice(14, 28)
        .map((input) => input.value),
      数量: Array.from(table5Inputs)
        .slice(28, 42)
        .map((input) => input.value),
      時間: Array.from(table5Inputs)
        .slice(42, 56)
        .map((input) => input.value),
      出来高_3: Array.from(table5Inputs)
        .slice(56, 70)
        .map((input) => input.value),
      出来高_4: Array.from(table5Inputs)
        .slice(70, 84)
        .map((input) => input.value),
    };

    // Table 6: バッチ
    const table6Inputs = tables[5].querySelectorAll(
      "input.form-input"
    ) as NodeListOf<HTMLInputElement>;
    tableData["table6"] = {
      ケースNo: Array.from(table6Inputs)
        .slice(0, 14)
        .map((input) => input.value),
      時間: Array.from(table6Inputs)
        .slice(14, 28)
        .map((input) => input.value),
    };

    formData["tables"] = tableData;

    // Create JSON string
    const jsonString: string = JSON.stringify(formData, null, 2);

    // Create a Blob for download
    const blob: Blob = new Blob([jsonString], { type: "application/json" });

    // Create a filename based on current date and time (YYYYMMDD_HHMMSS)
    const now: Date = new Date();
    const year: string = now.getFullYear().toString();
    const month: string = (now.getMonth() + 1).toString().padStart(2, "0");
    const day: string = now.getDate().toString().padStart(2, "0");
    const hours: string = now.getHours().toString().padStart(2, "0");
    const minutes: string = now.getMinutes().toString().padStart(2, "0");
    const seconds: string = now.getSeconds().toString().padStart(2, "0");
    const filename: string = `form_data_${year}${month}${day}_${hours}${minutes}${seconds}.json`;

    // Create a download link and trigger the download
    const url: string = window.URL.createObjectURL(blob);
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  });
});
