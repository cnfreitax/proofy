import { ProofType } from '../../../../../../domain/models';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Question } from '../../../question/typeorm/entities/question';

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

  @OneToMany(() => Question, question => question.exam, {
    eager: true,
    cascade: true,
  })
  questions: Question[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
