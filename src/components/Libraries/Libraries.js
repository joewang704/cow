/**
 * Component that displays all library cards of user
 * @param {object} props - object
 * @param {array} props.libraries - array of library objects
 */
const Libraries = ({ libraries }) => {
  return (
    <div>
      {
        if (libraries) {
          libraries.map((library) => {
            return <Library library=library>;
          });
        }
      }
    </div>
  );
}

export default Libraries;

