import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PgUrl {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    originalUrl: string;

    @Column()
    shortUrl: string;

}

