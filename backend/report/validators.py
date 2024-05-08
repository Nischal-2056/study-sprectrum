from django.core.exceptions import ValidationError
from jsonschema import validate


def LanguageProfValidator(value):
    schema = {
        "type": "object",
        "properties": {
            "IELTS": {
                "name": {"type": ["string", "null"]},
                "listning": {"type": ["string", "null"]},
                "reading": {"type": ["string", "null"]},
                "writing": {"type": ["string", "null"]},
                "speaking": {"type": ["string", "null"]},
            },
            "TOEFL": {
                "name": {"type": ["string", "null"]},
                "listning": {"type": ["string", "null"]},
                "reading": {"type": ["string", "null"]},
                "writing": {"type": ["string", "null"]},
                "speaking": {"type": ["string", "null"]},
            },
            "PTE": {
                "name": {"type": ["string", "null"]},
                "listning": {"type": ["string", "null"]},
                "reading": {"type": ["string", "null"]},
                "writing": {"type": ["string", "null"]},
                "speaking": {"type": ["string", "null"]},
            },
            "DUOLINGO": {
                "name": {"type": ["string", "null"]},
                "listning": {"type": ["string", "null"]},
                "reading": {"type": ["string", "null"]},
                "writing": {"type": ["string", "null"]},
                "speaking": {"type": ["string", "null"]},
            },
        },
    }
    try:
        validate(instance=value, schema=schema)
    except Exception as e:
        raise ValidationError(str(e.message))
