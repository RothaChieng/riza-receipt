export async function exportToPDF(element) {
  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4",
  });

  pdf.addImage(imgData, "PNG", 20, 20);
  pdf.save("receipt.pdf");
}
