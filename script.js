"use strict";
// document.addEventListener("DOMContentLoaded", () => {
//   const downloadBtn = document.getElementById(
//     "downloadBtn"
//   ) as HTMLButtonElement;
//   downloadBtn.addEventListener("click", () => {
//     // Collect all input values
//     const formData: { [key: string]: any } = {};
//     // Section 1: Dates (製造日 and 包装日)
//     const dateInputs = document.querySelectorAll(
//       ".date-box input.date-input"
//     ) as NodeListOf<HTMLInputElement>;
//     formData["dates"] = {
//       manufacturing: {
//         year: dateInputs[0].value,
//         month: dateInputs[1].value,
//         day: dateInputs[2].value,
//       },
//       packaging: {
//         year: dateInputs[3].value,
//         month: dateInputs[4].value,
//         day: dateInputs[5].value,
//       },
//     };
//     // Collect all tables
//     const tables = document.querySelectorAll("table");
//     const tableData: { [key: string]: any } = {};
//     // Table 1: 資料No., 製品名, etc.
//     const table1Inputs = tables[0].querySelectorAll(
//       "input.form-input"
//     ) as NodeListOf<HTMLInputElement>;
//     tableData["table1"] = {
//       資料No: table1Inputs[0].value,
//       製品名: table1Inputs[1].value,
//       製品コード: table1Inputs[2].value,
//       製品規格: table1Inputs[3].value,
//       承認: table1Inputs[4].value,
//       照査: table1Inputs[5].value,
//       作成: table1Inputs[6].value,
//     };
//     // Table 2: 設定重量, PPバント（青）
//     const table2Inputs = tables[1].querySelectorAll(
//       "input.form-input"
//     ) as NodeListOf<HTMLInputElement>;
//     tableData["table2"] = {
//       設定重量: table2Inputs[0].value,
//       PPバント_青_承認: table2Inputs[1].value,
//       PPバント_青_照査: table2Inputs[2].value,
//     };
//     // Table 3: 注意事項
//     const table3Inputs = tables[2].querySelectorAll(
//       "input.form-input"
//     ) as NodeListOf<HTMLInputElement>;
//     tableData["table3"] = {
//       注意事項: [
//         {
//           賞味期限_コード: table3Inputs[0].value,
//           賞味期限_包装資材名: table3Inputs[1].value,
//           賞味期限_詳細: table3Inputs[2].value,
//           賞味期限_不良数: table3Inputs[3].value,
//           賞味期限_包材残数: table3Inputs[4].value,
//         },
//         {
//           外装印字_コード: table3Inputs[5].value,
//           外装印字_包装資材名: table3Inputs[6].value,
//           外装印字_詳細: table3Inputs[7].value,
//           外装印字_不良数: table3Inputs[8].value,
//           外装印字_包材残数: table3Inputs[9].value,
//         },
//         {
//           内装印字_コード: table3Inputs[10].value,
//           内装印字_包装資材名: table3Inputs[11].value,
//           内装印字_詳細: table3Inputs[12].value,
//           内装印字_不良数: table3Inputs[13].value,
//           内装印字_包材残数: table3Inputs[14].value,
//         },
//         {
//           添付シール_コード: table3Inputs[15].value,
//           添付シール_包装資材名: table3Inputs[16].value,
//           添付シール_詳細: table3Inputs[17].value,
//           添付シール_不良数: table3Inputs[18].value,
//           添付シール_包材残数: table3Inputs[19].value,
//         },
//       ],
//     };
//     // Table 4: 時間, 確認者, etc.
//     const table4Inputs = tables[3].querySelectorAll(
//       "input.form-input"
//     ) as NodeListOf<HTMLInputElement>;
//     tableData["table4"] = {
//       段ボール: {
//         時間: table4Inputs[0].value,
//         確認者: table4Inputs[1].value,
//       },
//       テープ_茶: {
//         時間: table4Inputs[2].value,
//         確認者: table4Inputs[3].value,
//         クラフトテープ貼付け: table4Inputs[4].value,
//       },
//       ケースNo: {
//         時間: table4Inputs[5].value,
//         確認者: table4Inputs[6].value,
//       },
//       PPバンド: {
//         時間: table4Inputs[7].value,
//         確認者: table4Inputs[8].value,
//         クラフトテープ貼付け: table4Inputs[9].value,
//       },
//       添付品: {
//         時間: table4Inputs[10].value,
//         確認者: table4Inputs[11].value,
//       },
//       束り方: {
//         時間: table4Inputs[12].value,
//         確認者: table4Inputs[13].value,
//         クラフトテープ貼付け: table4Inputs[14].value,
//       },
//     };
//     // Table 5: 出来高, 数量, 時間
//     const table5Inputs = tables[4].querySelectorAll(
//       "input.form-input"
//     ) as NodeListOf<HTMLInputElement>;
//     tableData["table5"] = {
//       出来高_1: Array.from(table5Inputs)
//         .slice(0, 14)
//         .map((input) => input.value),
//       出来高_2: Array.from(table5Inputs)
//         .slice(14, 28)
//         .map((input) => input.value),
//       数量: Array.from(table5Inputs)
//         .slice(28, 42)
//         .map((input) => input.value),
//       時間: Array.from(table5Inputs)
//         .slice(42, 56)
//         .map((input) => input.value),
//       出来高_3: Array.from(table5Inputs)
//         .slice(56, 70)
//         .map((input) => input.value),
//       出来高_4: Array.from(table5Inputs)
//         .slice(70, 84)
//         .map((input) => input.value),
//     };
//     // Table 6: バッチ
//     const table6Inputs = tables[5].querySelectorAll(
//       "input.form-input"
//     ) as NodeListOf<HTMLInputElement>;
//     tableData["table6"] = {
//       ケースNo: Array.from(table6Inputs)
//         .slice(0, 14)
//         .map((input) => input.value),
//       時間: Array.from(table6Inputs)
//         .slice(14, 28)
//         .map((input) => input.value),
//     };
//     formData["tables"] = tableData;
//     // Create JSON string
//     const jsonString: string = JSON.stringify(formData, null, 2);
//     // Create a Blob for download
//     const blob: Blob = new Blob([jsonString], { type: "application/json" });
//     // Create a filename based on current date and time (YYYYMMDD_HHMMSS)
//     const now: Date = new Date();
//     const year: string = now.getFullYear().toString();
//     const month: string = (now.getMonth() + 1).toString().padStart(2, "0");
//     const day: string = now.getDate().toString().padStart(2, "0");
//     const hours: string = now.getHours().toString().padStart(2, "0");
//     const minutes: string = now.getMinutes().toString().padStart(2, "0");
//     const seconds: string = now.getSeconds().toString().padStart(2, "0");
//     const filename: string = `form_data_${year}${month}${day}_${hours}${minutes}${seconds}.json`;
//     // Create a download link and trigger the download
//     const url: string = window.URL.createObjectURL(blob);
//     const link: HTMLAnchorElement = document.createElement("a");
//     link.href = url;
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   });
// });
// Font loading variables
const ttf_font = "ipaexg.ttf";
const base64_font = "ipaexgbase64.txt";
let fontReady = false;
let base64Font = "";
// Load the font on page load
window.onload = async () => {
    try {
        const res = await fetch(base64_font);
        if (!res.ok)
            throw new Error(`Fetch failed: ${res.statusText}`);
        base64Font = await res.text();
        if (base64Font.length < 1000 || !/^[A-Za-z0-9+/=]+$/.test(base64Font))
            throw new Error(`Invalid base64 data in ${base64_font}`);
        fontReady = true;
        document.getElementById("downloadBtn").disabled =
            false;
    }
    catch (e) {
        console.error(`Failed to load ${base64_font}:`, e);
        try {
            const ttfRes = await fetch(ttf_font);
            if (!ttfRes.ok)
                throw new Error(`Fetch TTF failed: ${ttfRes.statusText}`);
            const fontData = await ttfRes.arrayBuffer();
            if (fontData.byteLength < 1000)
                throw new Error("Font file is too small or corrupted");
            base64Font = btoa(new Uint8Array(fontData).reduce((data, byte) => data + String.fromCharCode(byte), ""));
            fontReady = true;
            document.getElementById("downloadBtn").disabled =
                false;
        }
        catch (ttfError) {
            console.error("Fallback TTF loading failed:", ttfError);
            alert(`Failed to load font. Ensure ${base64_font} or ${ttf_font} is valid and accessible. Download from https://moji.or.jp/ipafont/.`);
        }
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.addEventListener("click", async () => {
        if (!fontReady) {
            alert("Font not loaded yet.");
            return;
        }
        // Collect all inputs into a dictionary
        const formData = {};
        // Section 1: Dates (6 inputs: 製造日 and 包装日)
        const dateInputs = document.querySelectorAll(".date-box input.date-input");
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
        const tableData = {};
        // Table 1: 資料No., 製品名, etc. (7 inputs)
        const table1Inputs = document.querySelectorAll("table:nth-child(2) input.form-input");
        tableData["table1"] = {
            資料No: table1Inputs[0].value,
            製品名: table1Inputs[1].value,
            製品コード: table1Inputs[2].value,
            製品規格: table1Inputs[3].value,
            承認: table1Inputs[4].value,
            照査: table1Inputs[5].value,
            作成: table1Inputs[6].value,
        };
        // Table 2: 設定重量, PPバント（青） (3 inputs)
        const table2Inputs = document.querySelectorAll("table.weight-row input.form-input");
        tableData["table2"] = {
            設定重量: table2Inputs[0].value,
            PPバント_青_承認: table2Inputs[1].value,
            PPバント_青_照査: table2Inputs[2].value,
        };
        // Table 3: 注意事項 (20 inputs: 5 per row across 4 rows)
        const table3Inputs = document.querySelectorAll("table:nth-child(4) input.form-input");
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
        // Table 4: 時間, 確認者, etc. (15 inputs)
        const table4Inputs = document.querySelectorAll("table:nth-child(5) input.form-input");
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
        // Table 5: 出来高, 数量, 時間 (84 inputs: 14 per row across 6 rows)
        const table5Inputs = document.querySelectorAll("table:nth-child(7) input.form-input");
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
        // Table 6: バッチ (28 inputs: 14 per row across 2 rows)
        const table6Inputs = document.querySelectorAll("table:nth-child(8) input.form-input");
        tableData["table6"] = {
            ケースNo: Array.from(table6Inputs)
                .slice(0, 14)
                .map((input) => input.value),
            時間: Array.from(table6Inputs)
                .slice(14, 28)
                .map((input) => input.value),
        };
        formData["tables"] = tableData;
        // Create JSON string and download
        const jsonString = JSON.stringify(formData, null, 2);
        const jsonBlob = new Blob([jsonString], { type: "application/json" });
        // Create a filename based on current date and time (YYYYMMDD_HHMMSS)
        const now = new Date();
        const year = now.getFullYear().toString();
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        const day = now.getDate().toString().padStart(2, "0");
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const timestamp = `${year}${month}${day}_${hours}${minutes}${seconds}`;
        const jsonFilename = `form_data_${timestamp}.json`;
        // Download JSON
        const jsonUrl = window.URL.createObjectURL(jsonBlob);
        const jsonLink = document.createElement("a");
        jsonLink.href = jsonUrl;
        jsonLink.download = jsonFilename;
        document.body.appendChild(jsonLink);
        jsonLink.click();
        document.body.removeChild(jsonLink);
        window.URL.revokeObjectURL(jsonUrl);
        // Generate PDF using the collected formData
        const jsPDF = window.jspdf.jsPDF; // Treat jsPDF as any to bypass type issues
        const doc = new jsPDF({ orientation: "portrait", unit: "pt" });
        try {
            doc.addFileToVFS("IPAexGothic.ttf", base64Font);
            doc.addFont("IPAexGothic.ttf", "IPAexGothic", "normal");
            doc.setFont("IPAexGothic");
        }
        catch (e) {
            console.error("Font embedding failed:", e);
            alert("Failed to embed IPAexGothic font. Ensure the base64 or TTF file is valid.");
            return;
        }
        // Header and Footer helpers
        function addHeader() {
            doc.setFillColor(30, 144, 255);
            doc.rect(0, 0, 595.28, 50, "F");
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(14);
            doc.text("管理日報", 297.64, 20, { align: "center" });
            doc.setFontSize(10);
            doc.text(`製造日: ${formData.dates.manufacturing.year}-${formData.dates.manufacturing.month}-${formData.dates.manufacturing.day} | 包装日: ${formData.dates.packaging.year}-${formData.dates.packaging.month}-${formData.dates.packaging.day}`, 297.64, 35, { align: "center" });
            doc.setDrawColor(0);
            doc.line(14.17, 50, 581.11, 50);
        }
        function addFooter() {
            doc.setFillColor(211, 211, 211);
            doc.rect(0, 811.89, 595.28, 30, "F");
            doc.setFontSize(8);
            doc.setTextColor(0);
            doc.text(`ページ ${doc.getCurrentPageInfo().pageNumber}/${doc.getNumberOfPages()}`, 581.11, 827.89, { align: "right" });
            doc.text("生成: システム | 連絡先: support@example.com", 14.17, 827.89);
        }
        // Add initial header
        addHeader();
        // Table 1: 資料No., 製品名, etc.
        doc.autoTable({
            startY: 60,
            head: [
                ["資料No.", "製品名", "製品コード", "製品規格", "承認", "照査", "作成"],
            ],
            body: [
                [
                    formData.tables.table1.資料No,
                    formData.tables.table1.製品名,
                    formData.tables.table1.製品コード,
                    formData.tables.table1.製品規格,
                    formData.tables.table1.承認,
                    formData.tables.table1.照査,
                    formData.tables.table1.作成,
                ],
            ],
            theme: "grid",
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: [255, 255, 255],
                fontSize: 8,
                font: "IPAexGothic",
            },
            bodyStyles: {
                fontSize: 8,
                textColor: [0, 0, 0],
                font: "IPAexGothic",
            },
            margin: { top: 30, left: 14.17, right: 14.17 },
            columnStyles: {
                0: { cellWidth: 60 },
                1: { cellWidth: 100 },
                2: { cellWidth: 60 },
                3: { cellWidth: 100 },
                4: { cellWidth: 60 },
                5: { cellWidth: 60 },
                6: { cellWidth: 60 },
            },
            didDrawPage: () => {
                addHeader();
                addFooter();
            },
        });
        // Table 2: 設定重量, PPバント（青）
        let lastY = doc.lastAutoTable.finalY + 10;
        doc.autoTable({
            startY: lastY,
            head: [["設定重量", "", "承認", "照査"]],
            body: [
                [
                    formData.tables.table2.設定重量,
                    "",
                    formData.tables.table2.PPバント_青_承認,
                    formData.tables.table2.PPバント_青_照査,
                ],
            ],
            theme: "grid",
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: [255, 255, 255],
                fontSize: 8,
                font: "IPAexGothic",
            },
            bodyStyles: {
                fontSize: 8,
                textColor: [0, 0, 0],
                font: "IPAexGothic",
            },
            margin: { left: 14.17, right: 14.17 },
            columnStyles: {
                0: { cellWidth: 100 },
                1: { cellWidth: 220 },
                2: { cellWidth: 60 },
                3: { cellWidth: 60 },
            },
        });
        // Table 3: 注意事項
        lastY = doc.lastAutoTable.finalY + 10;
        doc.autoTable({
            startY: lastY,
            head: [["", "", "", "コード", "包装資材名", "", "不良数", "包材残数"]],
            body: [
                [
                    "１、賞味期限：",
                    "1年６ヶ月",
                    "",
                    formData.tables.table3.注意事項[0].賞味期限_コード,
                    formData.tables.table3.注意事項[0].賞味期限_包装資材名,
                    formData.tables.table3.注意事項[0].賞味期限_詳細,
                    formData.tables.table3.注意事項[0].賞味期限_不良数,
                    formData.tables.table3.注意事項[0].賞味期限_包材残数,
                ],
                [
                    "２、外装印字：",
                    "例）24.11.10",
                    "",
                    formData.tables.table3.注意事項[1].外装印字_コード,
                    formData.tables.table3.注意事項[1].外装印字_包装資材名,
                    formData.tables.table3.注意事項[1].外装印字_詳細,
                    formData.tables.table3.注意事項[1].外装印字_不良数,
                    formData.tables.table3.注意事項[1].外装印字_包材残数,
                ],
                [
                    "３、内装印字：",
                    "例）24.11.10",
                    "",
                    formData.tables.table3.注意事項[2].内装印字_コード,
                    formData.tables.table3.注意事項[2].内装印字_包装資材名,
                    formData.tables.table3.注意事項[2].内装印字_詳細,
                    formData.tables.table3.注意事項[2].内装印字_不良数,
                    formData.tables.table3.注意事項[2].内装印字_包材残数,
                ],
                [
                    "４、添付シールを入れる：",
                    "１袋(40枚/2シート)",
                    "",
                    formData.tables.table3.注意事項[3].添付シール_コード,
                    formData.tables.table3.注意事項[3].添付シール_包装資材名,
                    formData.tables.table3.注意事項[3].添付シール_詳細,
                    formData.tables.table3.注意事項[3].添付シール_不良数,
                    formData.tables.table3.注意事項[3].添付シール_包材残数,
                ],
            ],
            theme: "grid",
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: [255, 255, 255],
                fontSize: 8,
                font: "IPAexGothic",
            },
            bodyStyles: {
                fontSize: 8,
                textColor: [0, 0, 0],
                font: "IPAexGothic",
            },
            margin: { left: 14.17, right: 14.17 },
            columnStyles: {
                0: { cellWidth: 60 },
                1: { cellWidth: 60 },
                2: { cellWidth: 60 },
                3: { cellWidth: 60 },
                4: { cellWidth: 60 },
                5: { cellWidth: 60 },
                6: { cellWidth: 60 },
                7: { cellWidth: 60 },
            },
        });
        // Table 4: 時間, 確認者, etc.
        lastY = doc.lastAutoTable.finalY + 10;
        doc.autoTable({
            startY: lastY,
            head: [
                [
                    "",
                    "時間",
                    "確認者",
                    "",
                    "時間",
                    "確認者",
                    "クラフトテープ貼付け",
                    "",
                ],
            ],
            body: [
                [
                    "段ボール",
                    formData.tables.table4.段ボール.時間,
                    formData.tables.table4.段ボール.確認者,
                    "テープ(茶)",
                    formData.tables.table4.テープ_茶.時間,
                    formData.tables.table4.テープ_茶.確認者,
                    formData.tables.table4.テープ_茶.クラフトテープ貼付け,
                    "",
                ],
                [
                    "ケースNo.",
                    formData.tables.table4.ケースNo.時間,
                    formData.tables.table4.ケースNo.確認者,
                    "PPバンド",
                    formData.tables.table4.PPバンド.時間,
                    formData.tables.table4.PPバンド.確認者,
                    formData.tables.table4.PPバンド.クラフトテープ貼付け,
                    "",
                ],
                [
                    "添付品",
                    formData.tables.table4.添付品.時間,
                    formData.tables.table4.添付品.確認者,
                    "束り方",
                    formData.tables.table4.束り方.時間,
                    formData.tables.table4.束り方.確認者,
                    formData.tables.table4.束り方.クラフトテープ貼付け,
                    "",
                ],
            ],
            theme: "grid",
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: [255, 255, 255],
                fontSize: 8,
                font: "IPAexGothic",
            },
            bodyStyles: {
                fontSize: 8,
                textColor: [0, 0, 0],
                font: "IPAexGothic",
            },
            margin: { left: 14.17, right: 14.17 },
            columnStyles: {
                0: { cellWidth: 60 },
                1: { cellWidth: 60 },
                2: { cellWidth: 60 },
                3: { cellWidth: 60 },
                4: { cellWidth: 60 },
                5: { cellWidth: 60 },
                6: { cellWidth: 60 },
                7: { cellWidth: 60 },
            },
        });
        // Table 5: 出来高, 数量, 時間
        lastY = doc.lastAutoTable.finalY + 10;
        doc.setFontSize(10);
        doc.text("出来高", 14.17, lastY);
        doc.text("数量 時間 記入", 581.11, lastY, { align: "right" });
        lastY += 10;
        doc.autoTable({
            startY: lastY,
            head: [
                [
                    "",
                    "1P",
                    "2P",
                    "3P",
                    "4P",
                    "5P",
                    "6P",
                    "7P",
                    "8P",
                    "9P",
                    "10P",
                    "11P",
                    "12P",
                    "13P",
                    "14P",
                ],
            ],
            body: [
                ["出来高", ...formData.tables.table5.出来高_1],
                ["", ...formData.tables.table5.出来高_2],
                [
                    "記入",
                    "15P",
                    "16P",
                    "17P",
                    "18P",
                    "19P",
                    "20P",
                    "21P",
                    "22P",
                    "23P",
                    "24P",
                    "25P",
                    "26P",
                    "27P",
                    "28P",
                ],
                ["数量", ...formData.tables.table5.数量],
                ["時間", ...formData.tables.table5.時間],
                [
                    "",
                    "29P",
                    "30P",
                    "31P",
                    "32P",
                    "33P",
                    "34P",
                    "35P",
                    "36P",
                    "37P",
                    "38P",
                    "39P",
                    "40P",
                    "41P",
                    "42P",
                ],
                ["", ...formData.tables.table5.出来高_3],
                ["", ...formData.tables.table5.出来高_4],
            ],
            theme: "grid",
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: [255, 255, 255],
                fontSize: 8,
                font: "IPAexGothic",
            },
            bodyStyles: {
                fontSize: 8,
                textColor: [0, 0, 0],
                font: "IPAexGothic",
            },
            margin: { left: 14.17, right: 14.17 },
            columnStyles: {
                0: { cellWidth: 60 },
                1: { cellWidth: 35 },
                2: { cellWidth: 35 },
                3: { cellWidth: 35 },
                4: { cellWidth: 35 },
                5: { cellWidth: 35 },
                6: { cellWidth: 35 },
                7: { cellWidth: 35 },
                8: { cellWidth: 35 },
                9: { cellWidth: 35 },
                10: { cellWidth: 35 },
                11: { cellWidth: 35 },
                12: { cellWidth: 35 },
                13: { cellWidth: 35 },
                14: { cellWidth: 35 },
            },
        });
        // Table 6: バッチ
        lastY = doc.lastAutoTable.finalY + 10;
        doc.autoTable({
            startY: lastY,
            head: [
                [
                    "バッチ",
                    "1B",
                    "2B",
                    "3B",
                    "4B",
                    "5B",
                    "6B",
                    "7B",
                    "8B",
                    "9B",
                    "10B",
                    "11B",
                    "12B",
                    "13B",
                    "14B",
                ],
            ],
            body: [
                ["ケースNo.", ...formData.tables.table6.ケースNo],
                ["時間", ...formData.tables.table6.時間],
            ],
            theme: "grid",
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: [255, 255, 255],
                fontSize: 8,
                font: "IPAexGothic",
            },
            bodyStyles: {
                fontSize: 8,
                textColor: [0, 0, 0],
                font: "IPAexGothic",
            },
            margin: { left: 14.17, right: 14.17 },
            columnStyles: {
                0: { cellWidth: 60 },
                1: { cellWidth: 35 },
                2: { cellWidth: 35 },
                3: { cellWidth: 35 },
                4: { cellWidth: 35 },
                5: { cellWidth: 35 },
                6: { cellWidth: 35 },
                7: { cellWidth: 35 },
                8: { cellWidth: 35 },
                9: { cellWidth: 35 },
                10: { cellWidth: 35 },
                11: { cellWidth: 35 },
                12: { cellWidth: 35 },
                13: { cellWidth: 35 },
                14: { cellWidth: 35 },
            },
        });
        // Download PDF
        const pdfFilename = `form_data_${timestamp}.pdf`;
        doc.save(pdfFilename);
    });
});
