const skipLinks = [
  { href: '#main', label: '본문 바로가기' },
  { href: '#header', label: '메인 메뉴 바로가기' },
  { href: '#contact', label: '연락처 바로가기' },
  { href: '#footer', label: '푸터 바로가기' },
];

const Skip = () => {
  return (
    <div id="skip">
      {skipLinks.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Skip;
