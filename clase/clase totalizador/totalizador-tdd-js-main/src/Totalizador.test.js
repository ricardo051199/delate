describe("Totalizador ", () => {
  it("deberia calcular para una cantidad por defecto", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("deberia calcular para una cantidad calquiera", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("deberia calcular para el estado CA", () => {
    expect(calcularTotal(2, 2, "CA")).toEqual(4.33);
  });
  it("deberia calcular para el estado de UT", () => {
    expect(calcularTotal(2, 2, "UT")).toEqual(4.266);
  });
  it("deberia calcular para el estado de NV", () => {
    expect(calcularTotal(2, 2, "NV")).toEqual(4.32);
  });
  it("deberia calcular para el estado de TX", () => {
    expect(calcularTotal(2, 2, "TX")).toEqual(4.25);
  });
  it("deberia calcular para el estado de AL", () => {
    expect(calcularTotal(2, 2, "AL")).toEqual(4.16);
  });
  it("calcular total para un descuento de 0%", () => {
    expect(calcularTotal(2, 2, "AL")).toEqual(4.16);
  });
});

function impuestoEstado(estado){
  let impuestos = { CA: 0.0825, UT: 0.0665, NV: 0.08, TX: 0.0625, AL: 0.04, "": 0 };
  return impuestos[estado];
}

function calcularTotal(cantidad, precio, estado) {
  let total = cantidad * precio;
  let impuesto = impuestoEstado(estado);
  total = total + total * impuesto;
  return total + 0;
}
