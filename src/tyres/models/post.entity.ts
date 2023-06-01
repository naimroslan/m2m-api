import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tyres_post')
export class TyresPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: ''})
  title: string;

  @Column({ default: ''})
  price: string;

  @Column({ default: ''})
  image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}