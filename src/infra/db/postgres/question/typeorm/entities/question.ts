import { Option } from '../../../options/typeorm/entities/option';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
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

  @OneToMany(() => Option, option => option.question, {
    eager: true,
    cascade: true,
  })
  options: Option[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
