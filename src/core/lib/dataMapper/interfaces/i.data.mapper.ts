interface IDataMapper <T, U> {
    executeMap(): U[] | U;
}