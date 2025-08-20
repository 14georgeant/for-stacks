
import { Cl, ClarityType } from '@stacks/transactions';
import { describe, expect, it } from 'vitest';

describe('message contract', () => {
  const accounts = simnet.getAccounts();
  const sender = accounts.get('wallet_1')!;

  it('allows users to set a new message', () => {
    const newMessage = 'testing';
    const { result } = simnet.callPublicFn(
      'message',
      'set-message',
      [Cl.stringUtf8(newMessage)],
      sender
    );
    expect(result).toBeOk(Cl.bool(true));
  });

  it('gets the message', () => {
    const { result } = simnet.callReadOnlyFn(
      'message',
      'get-message',
      [],
      sender
    );
    expect(result).toBeOk(Cl.stringUtf8('Hello, Stacks!'));
  });
});
