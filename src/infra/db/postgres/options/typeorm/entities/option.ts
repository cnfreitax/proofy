import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Question } from '../../../question/typeorm/entities/question';

@Entity('options_tb')
export class Option {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;

  @Column()
  question_id: string;

  @Column()
  correct: boolean;

  @ManyToOne(() => Question, question => question.id)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
