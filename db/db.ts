import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts'

const db = new Database('sqlite3', {
  filepath: '../species.sqlite',
})

class Species extends Model {
    static table = "species"
    static timestamps = true

    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        commonName: DataTypes.STRING,
        analog: DataTypes.STRING,
        class: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        family: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hasPhyloStudy: DataTypes.BOOLEAN,
    }
}

db.link([Species])
await db.sync()
await db.close()




