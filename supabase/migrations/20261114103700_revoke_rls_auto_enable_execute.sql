-- The "Enable automatic RLS" option creates public.rls_auto_enable(), a SECURITY DEFINER
-- function that was callable through the API (/rest/v1/rpc/rls_auto_enable) by anyone.
-- It only needs to run from its event trigger, so remove API access to it.
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
