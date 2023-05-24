#!/usr/bin/env python3
"""Import"""
from typing import Callable
"""Multiply floats"""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def multiply(value: float) -> float:
        "return"
        return value * multiplier
    """return"""
    return multiply
