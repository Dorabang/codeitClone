interface propTypes {
  params: { id: string };
}

const productDetailPage = ({ params: { id } }: propTypes) => {
  return (
    <div>
      <p>Product {id} Page</p>
    </div>
  );
};

export default productDetailPage;
