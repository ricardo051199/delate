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
  it("deberia calcular total para un descuento de 0%", () => {
    expect(calcularTotal(2, 2, "AL")).toEqual(4.16);
  });
  it("deberia calcular total para un descuento de 3%", () => {
    expect(calcularTotal(1002, 2, "AL")).toEqual(2021.6352);
  });
  it("deberia calcular total para un descuento de 5%", () => {
    expect(calcularTotal(3000, 2, "AL")).toEqual(5928);
  });
  it("deberia calcular total para un descuento de 7%", () => {
    expect(calcularTotal(7000, 2, "AL")).toEqual(13540.8);
  });
  it("deberia calcular total para un descuento de 10%", () => {
    expect(calcularTotal(10000, 2, "AL")).toEqual(18720);
  });
  it("deberia calcular total para un descuento de 15%", () => {
    expect(calcularTotal(30000, 2, "AL")).toEqual(53040);
  });
});

function impuestoEstado(estado){
  let impuestos = { CA: 0.0825, UT: 0.0665, NV: 0.08, TX: 0.0625, AL: 0.04, "": 0 };
  return impuestos[estado];
}

function descuentoCantidad(cantidad){
  let descuento = 0;
  if(cantidad >= 1000) descuento = 0.03;
  if(cantidad >= 3000) descuento = 0.05;
  if(cantidad >= 7000) descuento = 0.07;
  if(cantidad >= 10000) descuento = 0.1;
  if(cantidad >= 30000) descuento = 0.15;
  return descuento;
}

function calcularTotal(cantidad, precio, estado) {
  let total = cantidad * precio;
  let impuesto = impuestoEstado(estado);
  let descuento = descuentoCantidad(cantidad);
  total = total + total * impuesto;
  total = total - total * descuento;
  return total;
}
