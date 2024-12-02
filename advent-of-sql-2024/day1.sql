select 
children.name, 
wishes::json->>'first_choice' as primary_wish, 
wishes::json->>'second_choice' as backup_wish, 
wishes::json->>'colors'->0 as favorite_color, 
json_array_length(wishes::json->'colors') as color_count, 
case when difficulty_to_make >= 3 then 'Complex Gift'
when difficulty_to_make = 2 then 'Moderate Gift'
when difficulty_to_make = 1 then 'Simple Gift'
end gift_complexity,
case when category = 'outdoor' then 'Outside Workshop'
when category = 'educational' then 'Learning Workshop'
else 'General Workshop'
end workshop_assignment
from 
wish_lists 
join children on wish_lists.child_id = children.child_id 
join toy_catalogue on wishes::json->>'first_choice'=toy_catalogue.toy_name
order by children.name
limit 5;