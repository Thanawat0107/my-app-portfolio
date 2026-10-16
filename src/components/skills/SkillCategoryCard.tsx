import React from 'react';
import { SkillCategory } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category }) => {
  return (
    <Card className="p-6 space-y-4">
      <div>
        <h3 className="text-base font-bold text-white">{category.categoryName}</h3>
        <p className="text-xs text-slate-400 mt-1">{category.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {category.skills.map((skill) => (
          <Badge key={skill} variant="default">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
