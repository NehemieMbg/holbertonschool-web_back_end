#!/usr/bin/env python3
"""import"""
from typing import List, Tuple
"""return values with the appropriate types"""


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """return"""
    return [(i, len(i)) for i in lst]
