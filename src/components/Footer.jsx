export default function Footer({items}) {
    
    if(items.length === 0) return <footer className="stats">Catatan Belanjamu Masih Kosong!</footer>;
  
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked).length;
    const persentase = Math.round((checkedItems / totalItems) * 100);
    return (
      <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({persentase}%)</footer>
    )
  }