# Team Workflow

## Suggested work split
Adapt this split to the number of teammates. One person should coordinate integration and review API contracts.

| Owner | Module | Service folder | Database | Main tables |
|---|---|---|---|---|
| Teammate A | Wildlife | `services/wildlife-service` | `wildlife_db` | `species`, `animals`, `animal_sightings` |
| Teammate B | Protected Areas | `services/protected-area-service` | `protected_area_db` | `protected_areas`, `zones`, `habitats`, `water_resources` |
| Teammate C | Patrols | `services/patrol-service` | `patrol_db` | `patrols`, `patrol_assignments`, `patrol_observations` |
| Teammate D | Incidents | `services/incident-service` | `incident_db` | `incidents`, `incident_updates` |
| Teammate E | Rescue | `services/rescue-service` | `rescue_db` | `rescue_cases`, `treatment_records` |
| Teammate F | Users, Staff & Resources | `services/resource-service` | `resource_db` | `users`, `roles`, `staff`, `resources`, `resource_allocations` |
| Teammate G / coordinator | Conservation + integration | `services/conservation-service`, root docs | `conservation_db` | `conservation_programmes`, `programme_activities` |

If the team has fewer members, assign multiple small modules to one person. Assign frontend ownership to one teammate or rotate it after API contracts are stable.

## Rules to avoid merge conflicts
1. Work in separate feature branches: `feature/wildlife-crud`, `feature/incident-api`, etc.
2. Do not edit another teammate's service folder without coordinating first.
3. Do not change ports, database names, shared parent `pom.xml`, or endpoint paths without telling the team.
4. Agree on JSON request/response shapes in `API_CONTRACTS.md` before cross-service integration.
5. Each PR should include code, validation, a short test, and README/API documentation.
6. Merge small changes frequently; coordinator reviews and runs `mvn clean package`.
7. Never commit real passwords, API keys, or personal data.

## Definition of done for each module
- Entity/model and repository implemented.
- Service/business logic implemented.
- REST controller implemented with correct HTTP status codes.
- Input validation and useful error responses added.
- CRUD and edge cases tested.
- API contract documented.
- Service can run against its own PostgreSQL database.
- No direct access to another service's database.

## Recommended Git routine
```bash
git checkout -b feature/<module>-<task>
git add .
git commit -m "feat(<module>): describe change"
git push -u origin feature/<module>-<task>
```
Open a Pull Request and request review before merging to `main`.
