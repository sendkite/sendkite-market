export function formatPrice(won) {
  return (won).toLocaleString("ko-KR", {
    style: "currency",
    currency: "KRW",
  });
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getCompanyName() {
  const companyName = [
    "팀프레시",
    "구글",
    "페이스북",
    "아마존",
    "애플",
    "마이크로소프트",
    "넷플릭스",
    "트위치",
    "인스타그램",
    "텔레그램",
    "카카오",
    "네이버",
    "라인",
  ];

  return rando(companyName);
}