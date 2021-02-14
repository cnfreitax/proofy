import { OptionsModel } from 'domain/models';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Exam } from '../../../exam/typeorm/entities/exam';

@Entity('questions_tb')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  statement: string;

  @ManyToOne(() => Exam, exam => exam.id)
  @JoinColumn({ name: 'exam_id' })
  exam: Exam;

  @Column()
  points: number;

  @Column()
  exam_id: string;

  @Column({ type: 'json', nullable: true })
  options: OptionsModel[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
