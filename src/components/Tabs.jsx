export default function Tabs({ children, button, Wrapper = "menu" }) {
  return (
    <>
      <Wrapper>{button}</Wrapper>
      {children}
    </>
  );
}
