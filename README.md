# SimpleDb

Is small and easy to use key-value database with simple API.

**API**

*Read*
/load/{key}/
Returns JSON with value in "value" key.

*Write*
/save/{key}/{value}/
Returns JSON with response in "result" key - error (described in "description" key) or done (with no more description).

**Todos**
- Implement identification of attacks via logging of reuqests and analysing of request origin honor.
- Implement creating of delete links for every record - with api /delete/<code>, code will be hash of key.