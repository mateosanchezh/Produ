class Product{
    constructor(id,nombre,precio,descripcion){
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._descripcion = descripcion;
    }
        get id(){
            return this._id;
        }
        set id{
            this._id;
        }
        get nombre(){
            return this._nombre;
        }
        set nombre(){
            this._nombre;
        }
        
        get precio(){
            return this._precio;
        }
        set precio{
            this._precio;
        }
        
        get descripcion(){
            return this._descripcion;
        }
        set descripcion{
            this._descripcion
        }
        
}