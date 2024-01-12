export const Destination = () => {
  return (
    <div>
      <form>
        <label>Destination</label>
        <select name="destination" id="destination">
          <option value="Donlon">Donlon</option>
          <option value="Enchai">Enchai</option>
          <option value="Jebing">Jebing</option>
          <option value="Sapir">Sapir</option>
          <option value="Lerbin">Lerbin</option>
          <option value="Pingasor">Pingasor</option>
        </select>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};
