import { DataSource } from "typeorm";
import "dotenv/config"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: false,
        entities: ["src/entities/*.ts"]
    } :
    {
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        logging: true,
        synchronize: false,
        migrations: ["src/migrations/*.ts"],
        entities: ["src/entities/*.ts"]
    }
)

export default AppDataSource