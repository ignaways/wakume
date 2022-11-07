import CardAnime from "../lib/components/CardAnime";

const styles: any = {
  display: {
    // width: "50%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap:'1em'
  },
};

const MappingList = () => {
  const dataMapping = [1, 2, 3, 4, 1, 2, 3, 4].map(() => {
    return (
      <>
        <CardAnime />
      </>
    );
  });
  return (
    <>
      <div style={styles.display}>
        {dataMapping}
      </div>
    </>
  );
};

export default MappingList;
