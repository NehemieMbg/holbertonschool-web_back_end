#!/usr/bin/env python3
"""import"""
import asyncio
import random
"""asynchronous coroutine that takes in an integer argument"""


async def wait_random(max_delay: int = 10) -> float:
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    """Asynchronous coroutine that waits for a random delay between 0 and max_delay seconds
    and eventually returns the delay as a float."""
    return delay
