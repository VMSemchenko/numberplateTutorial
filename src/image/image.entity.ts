import {
    Entity, Column, PrimaryGeneratedColumn,
    // ManyToMany, OneToMany
} from 'typeorm';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'string' })
    cloudUrl: string;

    @Column({ type: 'number' })
    unixTimestamp: number;
}