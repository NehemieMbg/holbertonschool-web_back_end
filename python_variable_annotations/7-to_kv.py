#!/usr/bin/env python3
"""Complex types"""


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """return"""
    return k, float(v ** 2)
