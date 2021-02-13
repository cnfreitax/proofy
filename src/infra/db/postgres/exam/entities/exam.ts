import { Questions, ProofType } from '../../../../../domain/models';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('exams_tb')
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    name: 'type',
    enum: ProofType,
    default: ProofType.ONLINE,
  })
  type: ProofType;

  @Column({ type: 'array', nullable: true })
  questions: Questions[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
