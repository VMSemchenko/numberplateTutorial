import {
    Entity, Column, PrimaryGeneratedColumn,
    // ManyToMany, OneToMany
} from 'typeorm';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    cloudUrl: string;

    @Column({ type: 'bigint' })
    unixTimestamp: number;
}