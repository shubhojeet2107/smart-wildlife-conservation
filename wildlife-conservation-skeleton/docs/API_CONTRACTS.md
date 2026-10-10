# API Contracts (initial placeholders)

Base URL pattern: `http://localhost:<port>/api/v1`

All services expose `GET /health`.

## Wildlife Service — port 8081
- `GET /api/v1/animals` — list animals (TODO)
- `GET /api/v1/animals/{id}` — animal detail (TODO)
- `POST /api/v1/animals` — create animal (TODO)
- `GET /api/v1/species` — list species (TODO)
- Starter placeholder: `GET /api/v1/wildlife`

## Protected Area Service — port 8082
- `GET /api/v1/protected-areas` — list areas (TODO)
- `GET /api/v1/zones?areaId={id}` — zones (TODO)
- `GET /api/v1/zones/{id}` — zone detail (TODO)
- Starter placeholder: `GET /api/v1/protected-areas/status`

## Patrol Service — port 8083
- `GET /api/v1/patrols` — list patrols (TODO)
- `POST /api/v1/patrols` — create patrol (TODO)
- `PATCH /api/v1/patrols/{id}/status` — update status (TODO)
- Starter placeholder: `GET /api/v1/patrols/status`

## Incident Service — port 8084
- `GET /api/v1/incidents?zoneId={id}&from={date}&to={date}` — filter incidents (TODO)
- `POST /api/v1/incidents` — report incident (TODO)
- `PATCH /api/v1/incidents/{id}/status` — update status (TODO)
- Starter placeholder: `GET /api/v1/incidents/status`

## Rescue Service — port 8085
- `GET /api/v1/rescues` — list rescue cases (TODO)
- `POST /api/v1/rescues` — create rescue case (TODO)
- `POST /api/v1/rescues/{id}/treatments` — add treatment record (TODO)
- Starter placeholder: `GET /api/v1/rescues/status`

## Resource & User Service — port 8086
- `GET /api/v1/staff` — list staff (TODO)
- `GET /api/v1/resources` — list resources (TODO)
- `POST /api/v1/resources/allocations` — allocate resource (TODO)
- Starter placeholder: `GET /api/v1/resources/status`

## Conservation Service — port 8087
- `GET /api/v1/programmes` — list programmes (TODO)
- `POST /api/v1/programmes` — create programme (TODO)
- `GET /api/v1/programmes/{id}/activities` — programme activities (TODO)
- Starter placeholder: `GET /api/v1/conservation/status`

## Cross-service ID rule
Store external IDs (such as `zoneId`, `animalId`, `incidentId`, `staffId`) as ordinary IDs in the owning service. Do not add a database foreign key that points into another service's database. Validate referenced records through that service's REST API when needed.

## API conventions
- Use plural nouns for collection endpoints.
- Return JSON.
- Use `201 Created` for successful creation, `200 OK` for reads/updates, `204 No Content` for successful deletes.
- Validate incoming requests.
- Use `400` for invalid input, `404` for missing records, and `409` for conflicts.
- Add pagination for collection endpoints when needed.
