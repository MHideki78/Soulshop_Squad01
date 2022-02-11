const Cupon = require("../models/Cupon");

class CuponController {
  static async paginaCupon(req, res) {
    const cupons = await Cupon.find().lean();
    res.render("cupons", { cupons });
  }
  
  static async paginaAdicionarCupon(req,res){
    res.render("add_cupon")
  }

  static async addCupon(req,res) {
    const { codigo, valor, validade } = req.body;
    const cupon = Cupon({ codigo, valor, validade });
    console.log(cupon)
    await cupon.save();

    res.redirect("/cupons");
  }
  static async paginaEditCupon(req, res) {
    const { id } = req.params;
    const cupon = await Cupon.findById(id).lean();

    res.render("editar_cupon", { cupon });
  }
  static async editCupon(req, res) {
    const { id, codigo, valor, validade } = req.body;

    await Cupon.findByIdAndUpdate(id, {codigo, valor, validade});

    res.redirect("/cupons");
  }
  static async deleteCupon(req, res) {
    const { id } = req.body;
    await Cupon.findByIdAndDelete(id);
    res.redirect("/cupons");
  }
}

module.exports = CuponController 