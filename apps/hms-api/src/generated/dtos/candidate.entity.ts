import { ResidencyStatus, CandidateStatus } from '@prisma/client';
import { CandidateLocation } from './candidate-location.entity';
import { CandidateOpportunity } from './candidate-opportunity.entity';
import { CandidateSkill } from './candidate-skill.entity';
import { User } from './user.entity';
import { DigitalTalentRole } from './digital-talent-role.entity';
import { Opportunity } from './opportunity.entity';

export class Candidate {
  id: string;

  assigned_to_id: string | null;

  opportunity_id: string | null;

  role_id: string | null;

  name: string | null;

  email_address: string | null;

  linkedin_url: string | null;

  available_at: Date | null;

  would_relocate: boolean | null;

  num_years_exp: number | null;

  residency_status: ResidencyStatus | null;

  status: CandidateStatus | null;

  is_contacted: boolean | null;

  knowledge_and_abilities: string | null;

  links: string[];

  marketing_qualities: string[];

  created_at: Date;

  updated_at: Date | null;

  locations?: CandidateLocation[];

  opportunities?: CandidateOpportunity[];

  skills?: CandidateSkill[];

  assigned_to?: User | null;

  role?: DigitalTalentRole | null;

  opportunity?: Opportunity | null;
}
